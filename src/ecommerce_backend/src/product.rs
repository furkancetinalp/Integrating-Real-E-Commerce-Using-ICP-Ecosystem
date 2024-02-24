
use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use serde::Serialize;

//base struct
#[derive(CandidType, Deserialize, Clone)]
#[derive(Default, Debug, PartialEq, Serialize)]
pub struct Product {
    pub id: String,
    pub title: String,
    pub description: String,
    pub image_url: String,
    pub price: f64,
    pub created_at:String,
    pub category_id:String,
    
}