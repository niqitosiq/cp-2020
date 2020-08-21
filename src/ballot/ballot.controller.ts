import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BallotService } from './ballot.service';
import { voteDto } from './dto/voteDto.dto';

@Controller('ballot')
export class BallotController {
  constructor(private readonly ballotService: BallotService) {}

  @Post('/create')
  createBallot(): Promise<any> {
    return this.ballotService.create();
  }

  @Post('/vote')
  vote(@Body() body: voteDto): Promise<any> {
    return this.ballotService.vote(body.id, 'user123', body.vote);
  }

  @Get('/:id')
  all(@Param('id') id: number): Promise<any> {
    return this.ballotService.getAll(id);
  }
}
