import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  blogForm: FormGroup;
  selectedContentIndex: number;
  isContent: Boolean = true;
  @ViewChild('editor') editor: any;
  htmlString: string = '';
  quillEditorRef: any;
  modules = {
    syntax: true,
    toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'], // Code Block
    [{ 'header': 1 }, { 'header': 2 }], // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
    [{ 'direction': 'rtl' }], // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'], // remove formatting button
    ['link', 'image'], // link and image, video
    ]
    };
 
   constructor() {
    this.blogForm = new FormGroup({
      title: new FormControl('This is One'),
      about: new FormControl(''),
      image: new FormControl(''),
      contents: new FormArray(
        this.createMainContents()
      )
    });
    this.selectedContentIndex = 0;
  }
  changedEditor(event: any) {
    console.log('editor-change', event)
  }
  drop(event: any) {
    moveItemInArray(this.contents.controls, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {
  }
  createMainContents() {
    let contents=[];
    let content = new FormGroup({
      title: new FormControl('Introduction'),
      content: new FormControl('')
    })
    let content2 = new FormGroup({
      title: new FormControl('Conclusion'),
      content: new FormControl('')
    })
    contents.push(content);
    contents.push(content2);
    return contents;
  }
  createContentFormGroup(id:number): FormGroup {
    return new FormGroup({
      title: new FormControl('Content Part : '+(id-1)),
      content: new FormControl('')
    });
  }

  addContent(): void {
    const contents = this.blogForm.get('contents') as FormArray;
    contents.push(this.createContentFormGroup(contents.length));
    this.selectedContentIndex = contents.length - 1;
  }

  selectContent(index: number): void {
    this.selectedContentIndex = index;
  }

  get selectedContent(): FormGroup {
    const contents = this.blogForm.get('contents') as FormArray;
    return contents.at(this.selectedContentIndex) as FormGroup;
  }

  get title(): FormControl {
    return this.blogForm.get('title') as FormControl;
  }

  get subtitle(): FormControl {
    return this.blogForm.get('subtitle') as FormControl;
  }

  get image(): FormControl {
    return this.blogForm.get('image') as FormControl;
  }

  get contents(): FormArray {
    return this.blogForm.get('contents') as FormArray;
  }

  onSubmit(): void {
    // Handle form submission
  }
  goContent() {
    this.isContent = true;
    this.addContent()
  }
  removeContent(index: number) {
    this.contents.removeAt(index);
  }
  onDrop(event: any) {
    moveItemInArray(this.contents.controls, event.previousIndex, event.currentIndex);
  }
  openPreview(){

  }
  onSelectionChanged = (event:any) => {}
  onContentChanged = (event:any) => {
    this.htmlString = event.html;
  }
  editorCreated(quill: any) {}
  
}
