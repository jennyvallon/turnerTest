using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
 
using Content.Models;
using MongoDB.Bson;
 
namespace Content.Controllers
{
    [Route("api/Content")]
    public class ContentController : Controller
    {
        private readonly ContentAccess contentaccess;
 
        public ContentController(ContentAccess _contentaccess)
        {
            contentaccess=_contentaccess;
        }
 
        
        [HttpGet("{title}")]
        public IActionResult Get(string title)
        {
            var content = contentaccess.GetContent(title);
            if (content == null)
            {
                return NotFound();
            }
            return new ObjectResult(content);
        }

    }
}