

describe("notes module", function () {

  beforeEach(function() {
    notes.clear();
    notes.add('first note');
    notes.add('second note');
    notes.add('third note');
    notes.add('fourth note');
    notes.add('fifth note');
  });

  describe('adding a note', function() {
    it("should be able to add a new note", function () {
      expect(notes.add('sixth note')).toBe(true);
      expect(notes.count()).toBe(6);
    });
    it("should ignore blank notes", function () {
      expect(notes.add('')).toBe(false);
      expect(notes.count()).toBe(5);
    });
    it('should ignore notes containing only whitespace', function() {
      expect(notes.add('   ')).toBe(false);
      expect(notes.count()).toBe(5);
    });
    it('should require a string parameter', function() {
      expect(notes.add()).toBe(false);
      expect(notes.count()).toBe(5);
    });
  });

  describe('deleting a note', function() {
    it('should be able to delete the first index', function() {
      expect(notes.remove(0)).toBe(true);
      expect(notes.count()).toBe(4);
    });
    it('should be able to delete the last index', function() {
      expect(notes.remove(4)).toBe(true);
      expect(notes.count()).toBe(4);
    });
    it('should return false if index is out of range', function() {
      expect(notes.remove(15)).toBe(false);
      expect(notes.count()).toBe(5);
    });
    it('should return false if the parameter is missing', function() {
      expect(notes.remove("asd")).toBe(false);
      expect(notes.count()).toBe(5);
    });
  });

  describe('finding a note', function() {

    it('should be able to find the first index', function() {
      expect(notes.find('first note')).toBe(0);
    });

    it('should be able to find the last index', function() {
      expect(notes.find('fifth note')).toBe(4);
    });
    it('should return -1 if couldnt find any notes', function() {
      expect(notes.find('asd note')).toBe(-1);
    });
    it('should return false if the parameter is missing', function() {
      expect(notes.find('')).toBe(false);
    });
  });
});