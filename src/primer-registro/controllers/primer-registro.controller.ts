import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Request,
    Res,
    UseGuards,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { DeleteResult, UpdateResult } from 'typeorm';
  import { PrimerRegistro } from '../models/primer_registro.interface';
  import { PrimerRegistroService } from '../services/primer-registro.service';

  
  
@Controller('primer-registro')
export class PrimerRegistroController {
    constructor(private primerRegistroService: PrimerRegistroService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() primerRegistro: PrimerRegistro): Observable<PrimerRegistro> {
      return this.primerRegistroService.createPost(primerRegistro);
    }
  
    @Get()
    findAll(): Observable<PrimerRegistro[]> {
       return this.primerRegistroService.findAllPosts();
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
      @Body() primerRegistro: PrimerRegistro,
    ): Observable<UpdateResult> {
      return this.primerRegistroService.updatePost(id, primerRegistro);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.primerRegistroService.deletePost(id);
    }
  }
