import { ConfigModule } from '@nestjs/config';

export const envConfig = () =>
  ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
  });
