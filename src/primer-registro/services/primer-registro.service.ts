import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PrimerRegistroEntity } from '../models/primer_registro.entity';
import { PrimerRegistro } from '../models/primer_registro.interface';



@Injectable()
export class PrimerRegistroService {
  constructor(
    @InjectRepository(PrimerRegistroEntity)
    private readonly PrimerRegistroRepository: Repository<PrimerRegistroEntity>,
  ) {}

  createPost(primerRegistro: PrimerRegistro): Observable<PrimerRegistro> {
    return from(this.PrimerRegistroRepository.save(primerRegistro));
  }

  findAllPosts(): Observable<PrimerRegistro[]> {
    return from(this.PrimerRegistroRepository.find());
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

  updatePost(id: number, primerRegistro: PrimerRegistro): Observable<UpdateResult> {
    return from(this.PrimerRegistroRepository.update(id, primerRegistro));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.PrimerRegistroRepository.delete(id));
  }

  findPostById(id: number): Observable<PrimerRegistro> {
    return from(
      this.PrimerRegistroRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}