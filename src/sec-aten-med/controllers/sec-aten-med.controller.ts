

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
import { SecAtenMed } from '../models/sec_aten_med.interface';
import { SecAtenMedService } from '../services/sec-aten-med.service';
  
  
@Controller('sec-aten-med')
export class SecAtenMedController {  
    constructor(private secAtenMedService: SecAtenMedService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() secAtenMed: SecAtenMed): Observable<SecAtenMed> {
      return this.secAtenMedService.createPost(secAtenMed);
    }
  
    @Get()
    findAll(): Observable<SecAtenMed[]> {
       return this.secAtenMedService.findAllPosts();
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
      @Body() secAtenMed: SecAtenMed,
    ): Observable<UpdateResult> {
      return this.secAtenMedService.updatePost(id, secAtenMed);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.secAtenMedService.deletePost(id);
    }
  }

