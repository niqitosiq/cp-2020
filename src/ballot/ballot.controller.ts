import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BallotService } from './ballot.service';
import { voteDto } from './dto/voteDto.dto';
import { CreateBallotDto } from './dto/createBallotDto.dto'

@Controller('ballot')
export class BallotController {
  constructor(private readonly ballotService: BallotService) {}

  @Post('/create')
  createBallot(@Body() body: CreateBallotDto): Promise<any> {
    return this.ballotService.create(body);
  }

  @Post('/vote')
  vote(@Body() body: voteDto): Promise<any> {
    return this.ballotService.vote(body);
  }

  @Get('/:id')
  all(@Param('id') id: string): Promise<any> {
    return this.ballotService.getAll(id);
  }
}
