using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using MongoDB.Driver.Builders;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace Content.Models
{
    public interface IContentAccess
    {
         Task<IAsyncCursor<Content>>  GetContent(string title);
    }
}