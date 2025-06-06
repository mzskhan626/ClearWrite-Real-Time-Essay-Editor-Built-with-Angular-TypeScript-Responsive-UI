import { Component } from '@angular/core';
import { EssayService } from '../shared/essay.service';

@Component({
  selector: 'app-flag-suggest-panel',
  templateUrl: './flag-suggest-panel.component.html',
  styleUrls: ['./flag-suggest-panel.component.css']
})
export class FlagSuggestPanelComponent {
  flaggedSentence = '';
  suggestion = '';

  constructor(public essayService: EssayService) {
    this.essayService.flaggedSentence$.subscribe(val => this.flaggedSentence = val);
    this.essayService.suggestion$.subscribe(val => this.suggestion = val);
  }

  onFlaggedSentenceChange(value: string) {
    this.essayService.setFlaggedSentence(value);
  }

  onSuggestionChange(value: string) {
    this.essayService.setSuggestion(value);
  }

  applySuggestion() {
    const essay = this.essayService.essayText$.value;
    const flag = this.flaggedSentence;
    const suggestion = this.suggestion;
    if (!flag || !suggestion) return;

    const escapedFlag = flag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedFlag, 'gi');
    const newEssay = essay.replace(regex, suggestion);

    this.essayService.setEssayText(newEssay);
    this.essayService.setFlaggedSentence('');
    this.essayService.setSuggestion('');
  }

  undo() {
    this.essayService.undo();
  }
}