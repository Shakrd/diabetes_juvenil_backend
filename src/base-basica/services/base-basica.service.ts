import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BaseBasicaEntity } from '../models/base-basica.entity';
import { BaseBasica } from '../models/base_basica.interface';


@Injectable()
export class BaseBasicaService {
  constructor(
    @InjectRepository(BaseBasicaEntity)
    private readonly BaseBasicaRepository: Repository<BaseBasicaEntity>,
  ) {}

  createPost(baseBasica: BaseBasica): Observable<BaseBasica> {
    return from(this.BaseBasicaRepository.save(baseBasica));
  }

  findAllPosts(): Observable<BaseBasica[]> {
    return from(this.BaseBasicaRepository.find());
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

  updatePost(id: number, baseBasica: BaseBasica): Observable<UpdateResult> {
    return from(this.BaseBasicaRepository.update(id, baseBasica));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.BaseBasicaRepository.delete(id));
  }

  findPostById(id: number): Observable<BaseBasica> {
    return from(
      this.BaseBasicaRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}

