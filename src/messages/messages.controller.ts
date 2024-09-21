import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createtMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }
    @Post()
    createtMessage(@Body() body: createtMessageDto) {
        console.log(body);
    }
    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
    }
}
