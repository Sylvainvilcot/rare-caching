import { Body, Controller, Get, Post } from '@nestjs/common';
import { RewardService } from '../services/reward.service';
import { Reward } from '../entities/reward';
import { RewardDto } from '../dtos/reward.dto';

@Controller('rewards')
export class RewardController {
    constructor(private readonly rewardService: RewardService) {}
    @Get()
    async findAll(): Promise<Reward[]> {
        return await this.rewardService.find();
    }

    @Post()
    async create(@Body() payload: RewardDto): Promise<Reward> {
        return await this.rewardService.create(payload);
    }
}
