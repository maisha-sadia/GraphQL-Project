import { Field, InputType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  /**
   *  @IsUUID('all', { each: true })
   *  the first parameter tells the
   * version of UUID and the next one
   * is to check if the each of the item in the array has a uuid
   */
  @IsUUID('all', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
