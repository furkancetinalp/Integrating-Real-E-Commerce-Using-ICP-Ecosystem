use candid::{Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use serde::Serialize;

use std::collections::{HashMap, HashSet};
use std::num::TryFromIntError;
use std::result::Result as StdResult;

use candid::{CandidType, Principal};
use ic_cdk::export::candid;

#[derive(CandidType, Deserialize, Clone)]
pub struct Categories {
    pub id: String,
    pub key: String,
    pub name: String,
}