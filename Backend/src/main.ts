import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para el frontend
  app.enableCors({
    origin: '*', // En producción, restringe a tu dominio del frontend
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  });
  
  // Azure inyecta el puerto en process.env.PORT
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
}
bootstrap();