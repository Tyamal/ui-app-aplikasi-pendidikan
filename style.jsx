export default function Widget() {
    return (
        
        
        <div className="bg-background text-foreground min-h-screen flex flex-col">
          <nav className="bg-primary p-4 flex justify-between items-center">
            <img undefinedhidden="true" alt="logo" src="https://placehold.co/50?text=Logo" className="h-8" />
            <ul className="flex space-x-4">
              <li><a href="#" className="text-primary-foreground hover:text-primary/80">Home</a></li>
              <li><a href="#" className="text-primary-foreground hover:text-primary/80">Courses</a></li>
              <li><a href="#" className="text-primary-foreground hover:text-primary/80">About</a></li>
            </ul>
            <div className="flex items-center space-x-4">
              <button className="bg-primary-foreground text-primary px-3 py-1 rounded-lg">Profile</button>
              <button className="bg-primary-foreground text-primary px-3 py-1 rounded-lg">Logout</button>
            </div>
          </nav>
        
          <main className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to EduLearn!</h1>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <img undefinedhidden="true" alt="course" src="https://placehold.co/300?text=Course" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h2 className="text-lg font-semibold mb-2">Mathematics 101</h2>
                <p className="text-muted-foreground">Learn the basics of Mathematics in this introductory course.</p>
              </div>
            </div>
          </main>
        
          <div className="bg-popover text-popover-foreground p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Notifications</h3>
              <ul>
                <li>New course added!</li>
                <li>Reminder: Assignment due tomorrow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Feedback</h3>
              <p>How likely are you to recommend us to a friend?</p>
              <select className="bg-input text-input border border-primary rounded-lg px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
        
        
    )
}
