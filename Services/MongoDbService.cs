using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Content.Services{
    public class MongoDbService{

        private IMongoCollection<Content.Models.Content> ContentCollection {get;}
        public MongoDbService(string databaseName, string collectionName, string databaseUrl)
        {
            var mongoClient=new MongoClient(databaseUrl);
            var mongoDatabase=mongoClient.GetDatabase(databaseName);
            ContentCollection = mongoDatabase.GetCollection<Content.Models.Content>(collectionName);
        }

        public async Task<List<Content.Models.Content>> GetContent(){
            var results= new List<Content.Models.Content>();
            var documents= await ContentCollection.FindAsync(new BsonDocument());
            await documents.ForEachAsync(doc => results.Add(doc));
            return results; 
        }
        
    }
}
