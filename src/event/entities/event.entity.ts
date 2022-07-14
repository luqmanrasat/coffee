import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaTypes} from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop()
  type: string;

  @Prop()
  event: string;

  @Prop(SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);