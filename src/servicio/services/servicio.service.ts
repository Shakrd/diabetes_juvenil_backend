import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ServicioEntity } from '../models/servicio.entity';
import { Servicio } from '../models/servicio.interface';


@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(ServicioEntity)
    private readonly ServicioRepository: Repository<ServicioEntity>,
  ) {}

  createPost(servicio: Servicio): Observable<Servicio> {
    return from(this.ServicioRepository.save(servicio));
  }

  findAllPosts(): Observable<Servicio[]> {
    return from(this.ServicioRepository.find());
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

  updatePost(id: number, servicio: Servicio): Observable<UpdateResult> {
    return from(this.ServicioRepository.update(id, servicio));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.ServicioRepository.delete(id));
  }

  findPostById(id: number): Observable<Servicio> {
    return from(
      this.ServicioRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}

