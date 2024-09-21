import { IsNotEmpty, IsString } from "class-validator";

export class createtMessageDto {
    @IsString()
    @IsNotEmpty()
    content: string;
}