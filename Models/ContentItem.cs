using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
 
namespace Content.Models
{
    public class Content
    {
        
        [BsonElement("ReleaseYear")]
        public int ReleaseYear { get; set; }

        [BsonElement("TitleName")]
        public string TitleName { get; set; }
        
        [BsonElement("Genres")]
        public string[] Genres { get; set; }

        [BsonElement("StoryLines")]
        public StoryLine[] StoreLines { get; set; }
       
       [BsonElement("Awards")]
        public AwardHistory[] Awards { get; set; }
        
        public class StoryLine {
            
            [BsonElement("Description")]
             public string Description { get; set; }
             
             [BsonElement("Language")]
             public string Language { get; set; }
             
             [BsonElement("Type")]
             public string Type { get; set; }
             
        }

        public class AwardHistory {
            [BsonElement("AwardWon")]
             public bool AwardWon { get; set; }
             
             [BsonElement("AwardYear")]
             public int AwardYear { get; set; }
             
             [BsonElement("Participants")]
             public string[] Participants { get; set; }  

             
             [BsonElement("Award")]
             public string Award { get; set; }   
             
             [BsonElement("AwardCompany")]
             public string AwardCompany { get; set; }             
        }

    }
}