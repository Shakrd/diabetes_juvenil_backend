import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TipoDiabetesEntity } from '../models/tipo_diabetes.entity';
import { TipoDiabetes } from '../models/tipo_diabetes.interface';

@Injectable()
export class TipoDiabetesService {
  constructor(
    @InjectRepository(TipoDiabetesEntity)
    private readonly TipoDiabetesRepository: Repository<TipoDiabetesEntity>,
  ) {}

  createPost(tipoDiabetes: TipoDiabetes): Observable<TipoDiabetes> {
    return from(this.TipoDiabetesRepository.save(tipoDiabetes));
  }

  findAllPosts(): Observable<TipoDiabetes[]> {
    return from(this.TipoDiabetesRepository.find());
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

  updatePost(id: number, tipoDiabetes: TipoDiabetes): Observable<UpdateResult> {
    return from(this.TipoDiabetesRepository.update(id, tipoDiabetes));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.TipoDiabetesRepository.delete(id));
  }

  findPostById(id: number): Observable<TipoDiabetes> {
    return from(
      this.TipoDiabetesRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}

