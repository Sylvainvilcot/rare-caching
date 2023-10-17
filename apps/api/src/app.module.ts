import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RewardModule } from './reward/reward.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), RewardModule],
  controllers: [],
  providers: [],
})
export class AppModule{
}
