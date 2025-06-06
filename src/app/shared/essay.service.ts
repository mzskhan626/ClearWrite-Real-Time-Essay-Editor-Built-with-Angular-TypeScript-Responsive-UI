import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EssayService {
  essayText$ = new BehaviorSubject<string>('');
  flaggedSentence$ = new BehaviorSubject<string>('');
  suggestion$ = new BehaviorSubject<string>('');
  history: string[] = [];

  setEssayText(text: string) {
    this.history.push(this.essayText$.value);
    this.essayText$.next(text);
  }

  setFlaggedSentence(sentence: string) {
    this.flaggedSentence$.next(sentence);
  }

  setSuggestion(suggestion: string) {
    this.suggestion$.next(suggestion);
  }

  undo() {
    if (this.history.length > 0) {
      const prev = this.history.pop();
      this.essayText$.next(prev || '');
    }
  }
}