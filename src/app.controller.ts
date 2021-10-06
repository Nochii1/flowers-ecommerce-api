import { Controller, Get, Res, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('APP Module')
@Controller()
export class AppController {
    @Version('0')
    @Get()
    async getDocV0(@Res() res) {
        return res.redirect('/api/v0/docs')
    }
}
