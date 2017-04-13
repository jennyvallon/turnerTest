using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization;
using MongoDB.Driver.Builders;
using System.Collections.Generic;
using System.Threading.Tasks;

 
namespace Content.Models
{
    public class ContentAccess:IContentAccess
    {
        MongoClient _client;
        IMongoDatabase _db;
        IMongoCollection<Content> _collection;

       IAsyncCursor<Content> result; 
        
        public void ContentAccessM()
        {
            _client = new MongoClient("mongodb://readonly:turner@ds043348.mongolab.com:43348");
            _db= _client.GetDatabase("dev-challenge");
            _collection= _db.GetCollection<Content>("Titles");
        }

//.Net Promise implementation
//IMongo Read document implementation
//halp
        public async Task<IAsyncCursor<Content>> GetContent(string title)
        {
            ContentAccessM();
            FilterDefinition<Content> filter = new BsonDocument("TitleName",title);
            using (var cursor = await _collection.Find(filter).ToCursorAsync())
            {
                while (await cursor.MoveNextAsync())
                {
                    foreach (var doc in cursor.Current)
                    {
                        return result;
                    }
                }
            }
            return null;
        }
    }
}