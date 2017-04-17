using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Content.Models;
using Content.Services;

 
namespace Content.Controllers
{
    [Route("api/Content")]
    public class ContentController : Controller
    {
        [HttpGet]
        public async Task<JsonResult> Get(){
            var dbService= new MongoDbService("dev-challenge", "Titles", "mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge");
            var allContent= await dbService.GetContent();
            return Json(allContent);
        }
    }
}