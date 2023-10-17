import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reward, RewardSchema } from './entities/reward';
import { RewardController } from './controllers/reward.controller';
import { RewardService } from './services/reward.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Reward.name, schema: RewardSchema }])],
    controllers: [RewardController],
    providers: [RewardService],
})
export class RewardModule {}
