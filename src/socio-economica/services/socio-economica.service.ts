import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SocioEconomicaEntity } from '../models/socio_economica.entity';
import { SocioEconomica } from '../models/socio_economica.interface';


@Injectable()
export class SocioEconomicaService {
  constructor(
    @InjectRepository(SocioEconomicaEntity)
    private readonly SocioEconomicaRepository: Repository<SocioEconomicaEntity>,
  ) {}

  createPost(socioEconomica: SocioEconomica): Observable<SocioEconomica> {
    return from(this.SocioEconomicaRepository.save(socioEconomica));
  }

  findAllPosts(): Observable<SocioEconomica[]> {
    return from(this.SocioEconomicaRepository.find());
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

  updatePost(id: number, socioEconomica: SocioEconomica): Observable<UpdateResult> {
    return from(this.SocioEconomicaRepository.update(id, socioEconomica));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.SocioEconomicaRepository.delete(id));
  }

  findPostById(id: number): Observable<SocioEconomica> {
    return from(
      this.SocioEconomicaRepository.findOne({ id }, { relations: ['author'] }),
    );
  }
}

