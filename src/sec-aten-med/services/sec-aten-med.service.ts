import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SecAtenMedEntity } from '../models/sec_aten_med.entity';
import { SecAtenMed } from '../models/sec_aten_med.interface';

@Injectable()
export class SecAtenMedService {

  constructor(
    @InjectRepository(SecAtenMedEntity)
    private readonly SecAtenMedRepository: Repository<SecAtenMedEntity>,
  ) {}

  createPost(secAtenMed: SecAtenMed): Observable<SecAtenMed> {
    return from(this.SecAtenMedRepository.save(secAtenMed));
  }

  findAllPosts(): Observable<SecAtenMed[]> {
    return from(this.SecAtenMedRepository.find());
  }


  /*findBaseBasica(take: number = 10, skip: number = 0): Observable<BaseBasica[]> {
    return from(
      this.BaseBasicaRepository
        .createQueryBuilder('post')
        .innerJoinAndSelect('post.author', 'author')
        .orderBy('post.createdAt', 'DESC')
        .take(take)
        .skip(skip)
        .getMany(),
    );
  }*/

  updatePost(id: number, secAtenMed: SecAtenMed): Observable<UpdateResult> {
    return from(this.SecAtenMedRepository.update(id, secAtenMed));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.SecAtenMedRepository.delete(id));
  }

  findPostById(id: number): Observable<SecAtenMed> {
    return from(
      this.SecAtenMedRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}

