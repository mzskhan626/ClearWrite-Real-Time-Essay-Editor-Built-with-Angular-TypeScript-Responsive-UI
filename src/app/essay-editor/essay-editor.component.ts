import { Component, OnInit } from '@angular/core';
import { EssayService } from '../shared/essay.service';

@Component({
  selector: 'app-essay-editor',
  templateUrl: './essay-editor.component.html',
  styleUrls: ['./essay-editor.component.css']
})
export class EssayEditorComponent implements OnInit {
  essayText = '';
  highlightedText = '';

  constructor(public essayService: EssayService) {}

  ngOnInit() {
    this.essayService.essayText$.subscribe(text => {
      this.essayText = text;
      this.updateHighlight();
    });
    this.essayService.flaggedSentence$.subscribe(() => {
      this.updateHighlight();
    });
  }

  onEssayChange(newText: string) {
    this.essayService.setEssayText(newText);
    this.updateHighlight();
  }

  updateHighlight() {
    const flag = this.essayService.flaggedSentence$.value;
    if (!flag) {
      this.highlightedText = this.essayText;
      return;
    }
    const escapedFlag = flag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedFlag, 'gi');
    this.highlightedText = this.essayText.replace(regex, match => `<mark>${match}</mark>`);
  }
}