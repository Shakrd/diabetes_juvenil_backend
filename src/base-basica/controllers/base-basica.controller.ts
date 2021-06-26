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
import { BaseBasica } from '../models/base_basica.interface';
import { BaseBasicaService } from '../services/base-basica.service';
  
  
  @Controller('base-basica')
  export class BaseBasicaController  {
    constructor(private baseBasicaService: BaseBasicaService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() baseBasica: BaseBasica): Observable<BaseBasica> {
      return this.baseBasicaService.createPost(baseBasica);
    }
  
    @Get()
    findAll(): Observable<BaseBasica[]> {
       return this.baseBasicaService.findAllPosts();
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
      @Body() baseBasica: BaseBasica,
    ): Observable<UpdateResult> {
      return this.baseBasicaService.updatePost(id, baseBasica);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.baseBasicaService.deletePost(id);
    }
  }
