import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	async login(@Body() body: { username: string; password: string }) {
		const user = await this.authService.validateUser(body.username, body.password);
		if (!user) {
			throw new UnauthorizedException('Credenciales inválidas');
		}
        // Si las credenciales son válidas, generamos el token JWT
		return this.authService.login(user);
	}
}
