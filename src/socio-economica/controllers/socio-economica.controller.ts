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
import { SocioEconomica } from '../models/socio_economica.interface';
import { SocioEconomicaService } from '../services/socio-economica.service';
  
  
@Controller('socio-economica')
export class SocioEconomicaController {
    constructor(private socioEconomicaService: SocioEconomicaService) {}
  
    // @Roles(Role.ADMIN, Role.PREMIUM)
    // @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() socioEconomica: SocioEconomica): Observable<SocioEconomica> {
      return this.socioEconomicaService.createPost(socioEconomica);
    }
  
    @Get()
    findAll(): Observable<SocioEconomica[]> {
       return this.socioEconomicaService.findAllPosts();
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
      @Body() socioEconomica: SocioEconomica,
    ): Observable<UpdateResult> {
      return this.socioEconomicaService.updatePost(id, socioEconomica);
    }
  
    
    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
      return this.socioEconomicaService.deletePost(id);
    }
  }
