import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InformacionMedicaEntity } from '../models/información_medica.entity';
import { InformaciónMedica } from '../models/información_medica.interface';

@Injectable()
export class InformacionMedicaService {
    constructor(
        @InjectRepository(InformacionMedicaEntity)
        private readonly InformacionMedicaRepository: Repository<InformacionMedicaEntity>,
      ) {}
    
      createPost(informaciónMedica: InformaciónMedica): Observable<InformaciónMedica> {
        return from(this.InformacionMedicaRepository.save(informaciónMedica));
      }
    
      findAllPosts(): Observable<InformaciónMedica[]> {
        return from(this.InformacionMedicaRepository.find());
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
    
      updatePost(id: number, informaciónMedica: InformaciónMedica): Observable<UpdateResult> {
        return from(this.InformacionMedicaRepository.update(id, informaciónMedica));
      }
    
      deletePost(id: number): Observable<DeleteResult> {
        return from(this.InformacionMedicaRepository.delete(id));
      }
    
      findPostById(id: number): Observable<InformaciónMedica> {
        return from(
          this.InformacionMedicaRepository.findOne({ id }, { relations: ['author'] }),
        );
      }
    }

