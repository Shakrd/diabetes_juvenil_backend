import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { InformaciónMedica } from '../models/información_medica.interface';
import { InformacionMedicaService } from '../services/informacion-medica.service';

@Controller('informacion-medica')
export class InformacionMedicaController {
    constructor(private informacionMedicaService: InformacionMedicaService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() informaciónMedica: InformaciónMedica): Observable<InformaciónMedica> {
      return this.informacionMedicaService.createPost(informaciónMedica);
    }
  
    @Get()
    findAll(): Observable<InformaciónMedica[]> {
       return this.informacionMedicaService.findAllPosts();
     }
  
    
    /*@Get()
    findSelected(
      @Query('take') take: number = 1,
      @Query('skip') skip: number = 1,
    ): Observable<BaseBasica[]> {
      take = take > 20 ? 20 : take;
      return this.baseBasicaService.findPosts(take, skip);
    }*/
  
   
    @Put(':id')
    update(
      @Param('id') id: number,
      @Body() baseBasica: InformaciónMedica,
    ): Observable<UpdateResult> {
      return this.informacionMedicaService.updatePost(id, baseBasica);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.informacionMedicaService.deletePost(id);
    }
  }
