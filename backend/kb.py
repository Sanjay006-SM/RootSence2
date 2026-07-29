import json
import os
from typing import List, Dict, Any

class KnowledgeBase:
    def __init__(self, seed_file: str = "backend/data/seed_incidents.json"):
        self.seed_file = seed_file
        self.incidents: List[Dict[str, Any]] = []
        self.load_seed_data()

    def load_seed_data(self):
        if os.path.exists(self.seed_file):
            with open(self.seed_file, "r") as f:
                self.incidents = json.load(f)
                # Note explicitly: this boost is in-memory only and resets on server restart.
                for inc in self.incidents:
                    inc["boost"] = 1.0
        else:
            print(f"Warning: Seed file {self.seed_file} not found.")

    def get_all_incidents(self) -> List[Dict[str, Any]]:
        return self.incidents

    def add_incident(self, incident: Dict[str, Any]):
        self.incidents.append(incident)

    def record_feedback(self, incident_id: str, feedback: str):
        for inc in self.incidents:
            if inc.get("id") == incident_id:
                if feedback == "up":
                    inc["boost"] = min(2.0, inc["boost"] + 0.1)
                elif feedback == "down":
                    inc["boost"] = max(0.5, inc["boost"] - 0.1)
                return True
        return False

# Global instance
kb = KnowledgeBase()
