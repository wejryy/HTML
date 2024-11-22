import json
from datetime import datetime
from typing import Optional, Dict, Any

class AdventCalendar:
    def __init__(self, data: Dict[str, Any]):
        self.data = data

    def is_within_advent_period(self) -> Optional[int]:
        
        today = datetime.now()
        if today.month == 12 and 1 <= today.day <= 24:
            return today.day
        print("Mimo advedního obdobi.")
        return None

    def get_question_by_id(self, question_id: int) -> Optional[Dict[str, Any]]:
        
        for question in self.data.get("questions", []):
            if question["id"] == question_id:
                return question
        return None

    def display_question(self) -> None:
        
        question_id = self.is_within_advent_period()
        if question_id is None:
            return
        
        question = self.get_question_by_id(question_id)
        if question:
            print(question["text"])  
        else:
            print("Otázka nenalezena.")

def load_data(file_path: str) -> Dict[str, Any]:
   
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)

if __name__ == "__main__":
    data = load_data("./advnet/otazky.json")
    advent_calendar = AdventCalendar(data)
    advent_calendar.display_question()