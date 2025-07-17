import { useEffect, useRef, useState } from "react";

export const useMenuActions = () => {
	const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Toggle menu visibility
	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
    };

    // Animation variants
	const menuVariants = {
		closed: {
			opacity: 0,
			y: -10,
			scale: 0.95,
			transition: {
				duration: 0.2,
				ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
			},
		},
		open: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.2,
				ease: [0.42, 0, 1, 1], // cubic-bezier for easeOut
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, x: -10 },
		open: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.05,
				duration: 0.2,
			},
		}),
	};

   
    
	return {
		isOpen,
        toggleMenu,
        menuVariants,
        itemVariants,
        menuRef, // Expose menuRef for use in components
	};
};
