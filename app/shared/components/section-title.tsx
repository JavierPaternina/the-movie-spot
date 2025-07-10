import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <p className="text-preset-mobile-1 sm:text-preset-1 text-white ">{children}</p>;
};
