import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reward } from '../entities/reward';
import { Model } from 'mongoose';
import { RewardDto } from '../dtos/reward.dto';

@Injectable()
export class RewardService {
    constructor(@InjectModel(Reward.name) private model: Model<Reward>) {}

    async find(): Promise<Reward[]> {
        return await this.model.find({display: true});
    }

    async create(dto: RewardDto): Promise<Reward> {
        return await this.model.create(dto);
    }
}
