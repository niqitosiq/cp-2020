import { Injectable } from '@nestjs/common';
import Chain from '@christopy/chaindb';

@Injectable()
export class BallotService {
  chains = []; // Это не нужно в базе хранить.

  create(): any {
    const id = 123; // Тут нужно создавать инстанс и вернуть айдишник его
    const chain = Chain.New(id);
    this.chains.push(chain);
    return {
      id,
    };
  }
}
