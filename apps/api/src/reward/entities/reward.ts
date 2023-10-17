import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RewardDocument = HydratedDocument<Reward>;

@Schema()
export class Reward {
  @Prop()
  name: string;

  @Prop([Number])
  coordinates: number[];

  @Prop()
  rarity: string;

  @Prop()
  display: boolean;
}

export const RewardSchema = SchemaFactory.createForClass(Reward);