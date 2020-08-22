import { Injectable } from '@nestjs/common';
import * as Chain from '@christopy/chaindb';

@Injectable()
export class BallotService {
  create(candidates: Array<string>): any {
    const id = '123'; // Тут нужно создавать инстанс и вернуть айдишник его

    const total = {};
    candidates.forEach(candidate => {
      total[candidate] = 0;
    });

    Chain.New(`Chaindb-ballot-${id}`);
    Chain.Add(id, {
      total,
      user: 'system-initial-voting',
    });

    return {
      id,
    };
  }

  vote(id: string, user: string, vote: string): any {
    const { total } = JSON.parse(Chain.Last(id));

    total[vote] += 1; //Тут будет получение веса голоса

    const voteObject = {
      total,
      user,
      vote,
    };

    Chain.Add(id, voteObject);

    return voteObject;
  }

  getAll(id: string): any {
    return Chain.All(id);
  }
}
