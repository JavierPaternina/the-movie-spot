import { useAuthUser, useFormAuth } from '@/shared/hooks';
import { Form } from '@remix-run/react';
import React from 'react';

export const LoginForm: React.FC = () => {
	const { loginConfig, loginErrors } = useAuthUser();
	const { formData, onUpdateFormData, onSubmit, errors } = useFormAuth();
	const { inputs, inputsError, button, btnText, form } = loginConfig?.CSS || {};
	const { email, password, repeatPassword } = errors || {};
	return (
		<Form className={form} onSubmit={onSubmit}>
			{loginErrors?.general && <div className="text-red-500 text-sm text-center">{loginErrors.general}</div>}

			<div className="space-y-4 mb-400">
				<input
					type="text"
					name="email"
					placeholder="Email address"
					className={`${inputs} ${email ? inputsError : ''}`}
					value={formData.email}
					onChange={(e) => onUpdateFormData('email', e.target.value)}
				/>
				{email && <div className="text-red-500 text-sm">{email}</div>}

				<input
					type="password"
					name="password"
					placeholder="Password"
					className={`${inputs} ${password ? inputsError : ''}`}
					value={formData.password}
					onChange={(e) => onUpdateFormData('password', e.target.value)}
				/>
				{password && <div className="text-red-500 text-sm">{password}</div>}

				{!loginConfig.isLoginForm && (
					<input
						type="password"
						name="repeatPassword"
						placeholder="Repeat Password"
						className={`${inputs} ${repeatPassword ? inputsError : ''}`}
						value={formData.repeatPassword}
						onChange={(e) => onUpdateFormData('repeatPassword', e.target.value)}
					/>
				)}
				{repeatPassword && !loginConfig.isLoginForm && <div className="text-red-500 text-sm">{repeatPassword}</div>}
			</div>
			<div className="mt-500">
				<button type="submit" className={button} disabled={Object.values(errors).some((error) => error)}>
					<span className={btnText}>{loginConfig?.buttonText}</span>
				</button>
			</div>
		</Form>
	);
};
