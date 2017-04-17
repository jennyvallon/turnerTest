using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
 
namespace Content.Models
{
    public class Content
    {
        [BsonId]
        string _id {get;}
        
        [BsonElement("ReleaseYear")]
        public int ReleaseYear { get; set; }

        [BsonElement("OtherNames")]
        public IList<Dictionary<string,string>> OtherNames { get;}  

        [BsonElement("TitleName")]
        public string TitleName { get; set;  }

        [BsonElement("TitleId")]
        public int TitleId { get; }

        [BsonElement("TitleNameSortable")]
        public string TitleNameSortable { get; }


        [BsonElement("Keywords")]
        public string Keywords { get;}

        [BsonElement("KeyGenres")]
        public string KeyGenres { get;}
        
        [BsonElement("Genres")]
        public string[] Genres { get; set;  }

        [BsonElement("Storylines")]
        public Storyline[] Storylines { get; set;  }
       
       [BsonElement("Awards")]
        public AwardHistory[] Awards { get; set;  }

        [BsonElement("Participants")] 
        public  Participant[] Participants { get; set;  }

        

        // public class OtherName{
        //     [BsonElement("TitleLanguage")]
        //      public string TitleLanguage { get; set;  }

        //      [BsonElement("TitleNameType")]
        //      public string TitleNameType { get; set;  }

        //      [BsonElement("TitleNameSortable")]
        //      public string TitleNameSortable { get; set;  }
        // }

        public class Participant{
            [BsonElement("IsKey")] 
            public bool IsKey {get; set;}

            [BsonElement("RoleType")] 
            public string RoleType {get; set;}

            [BsonElement("IsOnScreen")] 
            public bool IsOnScreen {get; set;}

            [BsonElement("ParticipantType")] 
            public string ParticipantType {get; set;}

             [BsonElement("Name")] 
            public string Name {get; set;}

             [BsonElement("ParticipantId")] 
            public int ParticipantId {get; set;}

             [BsonElement("SortOrder")] 
            public int SortOrder {get;}
        }
        
        public class Storyline {
            
            [BsonElement("Description")]
             public string Description { get; set;  }
             
             [BsonElement("Language")]
             public string Language { get; set;  }
             
             [BsonElement("Type")]
             public string Type { get; set; }
             
        }

        public class AwardHistory {
            [BsonElement("AwardWon")]
             public bool AwardWon { get; set; }
             
             [BsonElement("AwardYear")]
             public int AwardYear { get; set; }
             
             [BsonElement("Participants")]
             public string[] Participants { get; set;}  

             
             [BsonElement("Award")]
             public string Award { get; set; }   
             
             [BsonElement("AwardCompany")]
             public string AwardCompany { get; set;}
                          
        }

    }
}