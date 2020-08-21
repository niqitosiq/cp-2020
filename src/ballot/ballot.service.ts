import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Chain = require('@christopy/chaindb');

Chain.New('Chaindb');

@Injectable()
export class BallotService {
  create(): any {
    const id = '123'; // Тут нужно создавать инстанс и вернуть айдишник его

    Chain.Add(id, 'created');

    return {
      id,
    };
  }

  vote(id: number, user: string, vote: string): any {
    const voteObject = {
      user,
      vote,
    };
    console.log(id);
    Chain.Add(id, voteObject);

    return voteObject;
  }

  getAll(id: number): any {
    return Chain.All(id);
  }
}
