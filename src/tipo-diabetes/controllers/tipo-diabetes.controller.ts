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
import { TipoDiabetes } from '../models/tipo_diabetes.interface';
import { TipoDiabetesService } from '../services/tipo-diabetes.service';
  
  
@Controller('tipo-diabetes')
export class TipoDiabetesController {
    constructor(private tipoDiabetesService: TipoDiabetesService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() tipoDiabetes: TipoDiabetes): Observable<TipoDiabetes> {
      return this.tipoDiabetesService.createPost(tipoDiabetes);
    }
  
    @Get()
    findAll(): Observable<TipoDiabetes[]> {
       return this.tipoDiabetesService.findAllPosts();
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
      @Body() tipoDiabetes: TipoDiabetes,
    ): Observable<UpdateResult> {
      return this.tipoDiabetesService.updatePost(id, tipoDiabetes);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.tipoDiabetesService.deletePost(id);
    }
  }
