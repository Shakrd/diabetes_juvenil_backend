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
import { Servicio } from '../models/servicio.interface';
import { ServicioService } from '../services/servicio.service';
  
  
    @Controller('servicio')
    export class ServicioController {
    constructor(private servicioService: ServicioService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() servicio: Servicio): Observable<Servicio> {
      return this.servicioService.createPost(servicio);
    }
  
    @Get()
    findAll(): Observable<Servicio[]> {
       return this.servicioService.findAllPosts();
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
      @Body() servicio: Servicio,
    ): Observable<UpdateResult> {
      return this.servicioService.updatePost(id, servicio);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.servicioService.deletePost(id);
    }
  }
