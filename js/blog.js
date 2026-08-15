/**
 * YogaSphere - Blog Search & Filter Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('blog-search');
  const categoryFilters = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-card-item');

  let activeCategory = 'all';
  let searchQuery = '';

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPosts();
    });
  }

  categoryFilters.forEach(button => {
    button.addEventListener('click', () => {
      // Manage active state
      categoryFilters.forEach(btn => {
        btn.classList.remove('bg-violet-600', 'text-white', 'dark:bg-violet-500', 'dark:text-slate-950');
        btn.classList.add('bg-slate-50', 'dark:bg-[#11131E]');
      });
      
      button.classList.remove('bg-slate-50', 'dark:bg-[#11131E]');
      button.classList.add('bg-violet-600', 'text-white', 'dark:bg-violet-500', 'dark:text-slate-950');

      activeCategory = button.getAttribute('data-category-filter');
      filterPosts();
    });
  });

  function filterPosts() {
    blogCards.forEach(card => {
      const titleEl = card.querySelector('h3 a') || card.querySelector('h3');
      const excerptEl = card.querySelector('p');
      const cardCategory = card.getAttribute('data-blog-category');

      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const excerpt = excerptEl ? excerptEl.textContent.toLowerCase() : '';

      const matchesSearch = title.includes(searchQuery) || excerpt.includes(searchQuery);
      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Set default active category styles
  const defaultCategoryBtn = document.querySelector('[data-category-filter="all"]');
  if (defaultCategoryBtn) {
    defaultCategoryBtn.classList.remove('bg-slate-50', 'dark:bg-[#11131E]');
    defaultCategoryBtn.classList.add('bg-violet-600', 'text-white', 'dark:bg-violet-500', 'dark:text-slate-950');
  }
});
