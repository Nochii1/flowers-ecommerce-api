import { Controller, Get, Res, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documentation Redirect')
@Controller()
export class AppController {

    /**
     * Endpoint redirecting to API documentation
     * @param res Petition response
     * @returns Redirect to API documentation
     */
    @Version('0')
    @Get()
    async getDocV0(@Res() res) {
        return res.redirect('/api/v0/docs')
    }
}
